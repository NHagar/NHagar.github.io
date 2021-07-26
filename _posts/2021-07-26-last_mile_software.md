---
layout: distill
title: Last mile software
date: 2021-07-26
authors:
  - name: Nick Hagar
description: Bridging the gap between open source and end users
---
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/lastmile.jpg' | relative_url }}" alt="photo of a road with telephone poles"/>
    </div>
</div>
<div class="caption">
    Photo by <a href="https://unsplash.com/@jakeblucker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jake Blucker</a> on <a href="https://unsplash.com/s/photos/telephone-wire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</div>

The last leg of a journey is the most difficult, and the least efficient. How do you get from the train station to your apartment? How does a package get from a large distribution center to its recipient's front porch? When building out a phone network, how does a telecommunications company run wire from the pole to every single customer's house?

These are all [last mile problems](https://en.wikipedia.org/wiki/Last_mile_(transportation)), scenarios in which shared resources become individual over time and space. They represent cases in which marginal costs and inefficiencies pile up, rather than falling with scale.

Take the phone line example. A shared phone line, until it hits capacity, can spread its cost over an ever-growing number of users. Maintenance is efficient, and every user instantly benefits from improvements. But everyone wants to use the phone at home. They need wires run from the shared line to *every* house. Installation costs might go down over time—with bulk material purchases and better-trained workers—but they will never get spread over more than one user. Similarly, maintenance and upgrades only affect one user, and must be applied sequentially across the whole customer base. The whole project becomes messy, costly, and expensive.

The core tenets of last mile problems—duplication of efforts, focus on individuals or small groups of users, and runaway costs—crop up in software. Not in the relationship between developers and users, but in the choice of *what* and *how* to develop. Developers start with a bundle of functionality, distributed as open source software—the shared lines. Then, they make tweaks and additions to fit what's publicly available to what their client needs. They create last mile software.

A clear case of last mile software is content management systems. A CMS handles the functionality of writing, formatting, and presenting content on a website, often acting as the backend for blogs and news outlets. Many organizations build proprietary CMSes—[Vox](https://getchorus.voxmedia.com/), the [New York Times](https://medium.com/r?url=https%3A%2F%2Fopen.nytimes.com%2Fbuilding-a-text-editor-for-a-digital-first-newsroom-f1cb8367fc21), the [Washington Post](https://www.arcxp.com/), and many others. These all represent duplicated efforts. That's not to say there aren't meaningful *differences* among these solutions. They all encode different philosophies and use cases. But much of the core activity of managing content simply doesn't change much from context to context.

Last mile problems are pernicious in their inevitability. No one piece of software will ever account for every use case.<d-footnote>The abundance of plugins and extensions available for even common consumer software drives this point home.</d-footnote> The question becomes, can we create a better shared resource? Just like it doesn't make sense to stop the phone line 100 yards short of a neighborhood, duplicating common functionality across proprietary code creates a massive waste of time and resources.<d-footnote>It also shuts out smaller players. A local newspaper could certainly *use* a well-crafted CMS, but making one from scratch is a tall order.</d-footnote> Reducing that waste requires a collective effort, within industries or use cases, to figure out what capabilities fill the most needs, then open sourcing those capabilities. Rather than the bottom-up work of individual developers, it requires a top-down agenda in search of public resources.
