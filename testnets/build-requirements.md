---
title: Build Requirements
order: 1
---

# Build Requirements

For minimum system requirements instances with 2 processor CPU and 4GB memory is recommended.
Building code may require larger instances, especially if you want to build a static instance (recompile Rust code).

# Installation

Node executable may vary between networks, and [Option 1](#option-1-preferred-build-static-binary-using-docker-linux-only)
might become obsolete. Network details, configuration and informations can be found on [CosmWasm/testnets](https://github.com/CosmWasm/testnets). Please head over to the repo and explore before starting setting up a node.

## Simplest

Use docker image, or build locally: `https://github.com/CosmWasm/wasmd/#dockerized`.

## Bare Metal

### Option 1 (preferred - build static binary using docker - Linux only)

Constructing a `wasmd` is a tricky process and involves using Alpine Linux as a build environment and recompiling the Rust dependencies as static libs.
Using Dockerfile is suggested.

1. Clone the project `git clone https://github.com/CosmWasm/wasmd.git && cd wasmd`
2. Checkout to testnets version `git checkout vx.x.x`
3. Build docker image `docker build . -t wasmd-docker`
4. Extract the specific binaries from build environment:

   ```sh
   id=$(docker create wasmd-docker)
   docker cp $id:/usr/bin/wasmd .
   docker cp $id:/usr/bin/wasmcli .
   # docker cp $id:/usr/bin/corald .
   # docker cp $id:/usr/bin/coral .
   docker rm -v $id
   ```

5. Use the static binaries on any bare metal Linux box

### Option 2: (dev-style: dynamic binary - works on Linux and OSX)

1. `git clone https://github.com/CosmWasm/wasmd.git && cd wasmd`
2. Checkout to testnets version `git checkout vx.x.x`
3. Compile dev build: `make build` or `make build-<testnet>` for testnets
4. `ldd build/wasmd`
5. Notice the line like: `libgo_cosmwasm.so => /home/USERNAME/go/pkg/mod/github.com/!cosm!wasm/go-cosmwasm@v0.9.1/api/libgo_cosmwasm.so`
   this file must be in the library path along with wasmd
6. Copy `wasmd` to any location on the target system (that will run the node)
7. Copy `libgo_cosmwasm.so` (path above) to the target system under `/usr/lib/libgo_cosmwasm.so`
