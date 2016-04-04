# [HTTP/2 Front End Development Performance Test](https://github.com/mgreystone/test-http2)

## Purpose

I created this project to learn how to best use HTTP/2 in front end development. I wanted to compare load times between bundled JavaScript & separate files via HTTP/2 multiplexing.

1. Determine if loading a JavaScript dependency tree file by file was better than using a JavaScript bundler like WebPack, Browserify, or JSPM. I did so by creating a small React app with only a few small components. At this time, only JSPM has [support for HTTP/2](http://jspm.io/docs/production-workflows.html#creating-a-dependency-cache), so that was my choice. I wrote the app in ES5; there is no transpiling overhead.

1. Determine if loading images as separate files had any performance boost. I did so by loading 400 images individually.

I created a Docker image for an NGINX server with HTTP/2 enabled for this test. I disabled all HTTP caching to prevent it from skewing the results.

## Results

Each test was run ten times in Google Chrome 49.0.2623.110 (64-bit) on Mac OS 10.11.4:

### JavaScript Dependencies

|                               | Average Load Time |
|-------------------------------|-------------------|
| HTTP/1, unbundled, unminified | 573.7895 ms       |
| HTTP/1, bundled, unminified   | 44.172  ms        |
| HTTP/2, unbundled, unminified | 581.2775 ms       |

These results surprised & disappointed me. Loading individual modules over HTTP/2 had no improvement over HTTP/1. I was convinced I had done something wrong & spent hours in Wireshark & Chrome's debug tools. I was able to confirm that my server was multiplexing as expected. What a bummer...

### Images

|        | Average Load Time |
|--------|-------------------|
| HTTP/1 | 945.3511 ms       |
| HTTP/2 | 579.9895 ms       |

HTTP/2 was almost 40% faster at loading images than HTTP/1.

## Conclusion

My approach to this test appears to have been naïve, and definitely far from scientific, but I do not see HTTP/2 adding any significant improvements to front-end development.

There appears to be very little literature on the subject, but as I scrambled to explain my results, I found a study by the [Khan Academy](http://engineering.khanacademy.org/posts/js-packaging-http2.htm) about HTTP/2's short comings loading JavaScript. 

I very much hope more improvements can be made as HTTP/2 gains more widespread adoption.

Did I make any mistakes or oversights? Feedback is welcome!

## Other Notes

* As [other](https://github.com/jspm/jspm-cli/issues/872) [people](https://github.com/JonahBraun/jspm-perf-test) have pointed out, there seems to be a problem with Chrome's Dev Tools. Merely having the tools open caused HTTP/2 request to take almost five times as long! There was no perceived impact on HTTP/1 requests.

* To my dismay, I discovered that cloud providers have poor HTTP/2 support today. HTTP/2 requires SSL, but in most cloud architectures, SSL is not applied to the webserver directly but to a load balancer or other form of middleware. AWS & Azure do not have HTTP/2 support at all. [Google Cloud Platform does](https://cloud.google.com/compute/docs/load-balancing/http/), but I unfortunately do not have access to Google Cloud Assets.

## Building

### Requirements

* Node
* Make
* Docker

### Running

* Edit the `env_make` file. Edit the port numbers to meet your needs. Update the certificates' paths to point to your own certificate files, as HTTP/2 requires SSL.
* Run `make build` to install all node & jspm dependencies & build the docker image.
* Run `make run` to run the server.
* Run `make start` to run the server as a daemon & `make stop` to stop it. `make rm` will remove the docker image.


April 2, 2016
