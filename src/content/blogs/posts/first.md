## Understanding goroutines
Goroutines are functions created and scheduled to be run independently by the Go scheduler. The Go scheduler is responsible for the management and execution of goroutines.

## WaitGroup
WaitGroup, as the name suggests, is a Go standard library mechanism that allows us to wait for a group of goroutines until they finish explicitly.

No particular factory function exists to create them, since their zero-value is already a valid usable state. Since WaitGroup has been created, we need to control how many goroutines we are waiting for. We can use the Add() method to inform the group. use Done() to tell that we are done.

To make our function interact with Waitgroup, we need to send a reference to this group. Once we have its reference, the function can defer, calling Done(), to ensure that we signal correctly for our group every time the function is complete.

This is the new say function:

```go
func say(s string, wg *sync.WaitGroup) {
    defer wg.Done()
    for i := 0; i < 5; i++ {
        fmt.Println(s)
    }
}
```

We don't need to rely on time.Sleep(), so this version doesn't have it.
Now, we can control our group of goroutines.

## Changing shared state
Imagine a scenario where two diligent workers are tasked with packing items into boxes in a busy warehouse. Each worker fills a fixed number of things into packets, and we must keep track of the total number of items packed.

This seemingly straightforward task, analogous to concurrent programming, can quickly become a nightmare when not handled properly. With proper synchronization, the workers may avoid intentionally interfering with each other's work, leading to incorrect results and unpredictable behavior. It's a classic example of a data race, a common challenge in concurrent programming.

The following code will walk you through an analogy where two warehouse workers face a data race issue while packing items into boxes. We'll first present the code without proper synchronization, demonstrating the data race problem. Then, we'll modify the code to address the issue, ensuring that the workers collaborate smoothly and accurately.

Let's step into the bustling warehouse and witness firsthand the challenges of concurrency and the importance of synchronization in this example:

```go
package main
import (
    "fmt"
    "sync"
)
func main() {
    fmt.Println("Total Items Packed:", PackItems(0))
}
func PackItems(totalItems int) int {
    const workers = 2
    const itemsPerWorker = 1000
    var wg sync.WaitGroup
    itemsPacked := 0
    for i := 0; i < workers; i++ {
        wg.Add(1)
        go func(workerID int) {
            defer wg.Done()
            // Simulate the worker packing items into boxes.
            for j := 0; j < itemsPerWorker; j++ {
                itemsPacked = totalItems
                // Simulate packing an item.
                itemsPacked++
                // Update the total items packed without proper
                //synchronization.
                totalItems = itemsPacked
            }
        }(i)
    }
    // Wait for all workers to finish.
    wg.Wait()
    return totalItems
}
```

## Nondeterministic results
consider the alternative main function

```go
func main() {
    times := 0
    for {
        times := 0
        for {
            times++
            counter := PackItems(0)
            if counter != 2000 {
                log.Fatalf("it should be 2000 but found %d on execution %d", counter, times)
            }
        }
    }
}
```

The program constantly runs the PackItems function until the expected result of 2,000 is not achieved. Once this occurs, the program will display the incorrect value returned by the function and the number of attempts it took to reach that point.

Because of the non-deterministic nature of the Go scheduler, the result would be right most of the time. This code would need a lot of runs to reveal its synchronization flaw.

**ProTip:**
If you're using your personal computer, there are likely many tasks being performed, but your machine probably has a lot of unused resources. However, it's important to consider the amount of noise on shared nodes in a cluster if you're running programs in cloud environments with containers. By "noise," I mean the work done on the host machine while running your program. It may be just as idle as your local experiment. Still, it's likely being used to its full potential in a cost-effective scenario where every core and memory is utilized.

This scenario of a constant contest for resources makes our schedule much more inclined to choose another workload instead of just continuing to run our goroutine.

In the following example, we call the runtime.Gosched function to emulate noise. The idea is to give a hint to the Go scheduler, saying, "Hey! Maybe it is a good moment to pause me":

```go
for j := 0; j < itemsPerWorker; j++ {
    itemsPacked = totalItems
    runtime.Gosched() // emulating noise!
    itemsPacked++
    totalItems = itemsPacked
}
```

Running the main function again, we can see that the erroneous results occur much faster than before.
In my execution, for example, I need just four iterations:
```
it should be 2000 but found 1507 on execution 4
```

## Managing data races
when multiple go rutines access shared data or resources concurrently, a "race condition" can occur. this type of bug can cause serious problems.

The Go test tool has a built-in feature called **go race detection** that can detect race condition in go apps. look the main_test.go file for more details.

## Atomic operations
Atomic operations in go are focuesd on synchronizing and managing concureency among gorutines using the sync/atomic package.

Go offers atomic package to load store add and CAS(comapre and swap) for certain types, such as int32, int64, uint32, uint64, uintptr, float32, and float64. Atomic coode can't be directly performed on arbitray data structure.

for more info look into atomic_operations.go

atomic structure are greatfor synchronizing single task. when we have multiple tasks it is better to use mutex.

## Mutexes
Mutex are like rythm keepers , allowinf one gorutine to run at a time.
check out the mutexEx.go file for more details.

## Making sense of channels
Welcome to the channel carnival!

Imagine Go channels as magical, clown-sized pipes that allow circus performers (goroutines) to pass around juggling balls (data) while making sure nobody drops the ball – quite literally!

to create a channel use 'make' keyword . like make(chan T), here T is type i.e make(chan string)

there are to type of channels buffered and unbuffered channels. in buffered channel we provide capacity.


