# What is this?

The purpose of this library to provide an easy to use dependency injection method that can be used in Typescript projects.


# Installation

`npm i ioc-lib --save`

# How to use

Basic example usage:

```
import { Inject } from "ioc-lib";

@InjectDependency([ClassToInject, ObjectToInject])
class Container {}

```

## Concepts

With the help of this library dependency injection can be achieved instead of defining them inside the container class. You can create your own container class and with the help of the InjectDependency decorator you can easily inject its dependencies.

## Currently Supports
Transient Classes && Transient Objects

