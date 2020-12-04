## **(Note: Avid updates on this post will come soon.)**

**Yeah, you read that correctly**

I’m making a free game and it’s called Corruption. It’s nowhere near done, and it won’t look anything like the prototype we see here, but I’ve been meeting with friends and I haven’t had a chance to make a monthly article. Side note, this was supposed to be published November 30th. Sorry. So, I thought I’d talk about the elephant in my room, my game. Since this is a total progress log, I’ll be listing how I’ve gotten here and what I’m doing right now. The pictures will also be smoother. Otherwise, let’s hop right into it.

**What is Corruption?**

Corruption is a somewhat different take on traditional platforming. It’s supposed to take place inside of a corrupted Windows 95, and you’re trying to escape the corrupted files as fast as possible. It’s supposed to be fast-paced, but...I haven’t got there yet, as I’m still working on the essentials to build the game. What do I mean by that? I mean I'm only on the boss. So, yeah...But, essentials are needed more than other stuff.

**The origins of the game**

The fast-paced mechanic that I haven’t implemented yet was inspired from Karlson, a game you can [wishlist now on Steam](https://store.steampowered.com/app/1228610/KARLSON/). I also have had the idea of corrupted, glitching games for a while now, as I like the aesthetic. So, why not combine the two? Yep, this is literally the whole idea of the game summed up right here.

**The beginning of terror**

Here’s the reason why I call it terror—I have the fear of constantly having the worst code in the world. What do I know? I’ve only been making this for about 2-3 months. Anyways, I have spaghettophobia–a fear of messy code, and so I'm always second guessing myself in the codeblocks. A mistake on it's own, but no biggie, right?

Another mistake I’m probably never going to fix is this: 

I used:
`public GameObject gobj;` 

Instead of:
`GameObject gobj = GetComponent<GameObject()>;`

**Every. single. time.**

If you don't know what the big issue is here, I'll tell you something. `GetComponent<>();` is your **friend** if you're making an ambitious project. You _can_ use `public GameObject;`, but I wouldn't recommend it if you're needing lots of variables and components. Now I know not to make that mistake in my later works, but now it seems counterintuitive to rework the whole variable system. Maybe I’ll make a faster and more agile Corruption 2 with modifications if it gets positive reception, or if I feel like it. Anyways, on to the movement.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/acfoq588f52fth0ekhjc.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/q81iqehfiyd0uf9gjjmq.png)


A month ago exactly, I finished the basic movement. There were other steps that led to this event, but this is the first documented, since I have a bad short-term. The movement was very easy—just some simple `Input.GetAxis(“Horizontal”);`, and you're good to go. But I never used `Input.GetAxis();`. I don't know why, but I just wanted to use `Input.GetKey(keyCode.#);` for some reason.
I just like to create my `if ()` statements.

Of course, by this point, I'd already have a character with a simple ground texture. I'm going for a 16-bit feel, as it is based around an old MS-DOS machine. I also wanted smoother acceleration. A great idea for any 2D game, personally. But,  I decided to do this without any `Rigidbody2D`. It was like trying to chop down a tree with a blender—you might, but most certainly no. So, I was just sitting there with a GameObject for hours, trying to figure out why this isn't working right.

**Pushing myself to go further**

I probably should’ve asked for help sooner than I did, but that’s now in the past, and I can’t do anything about it. The problem was that it would make the character sling backwards, like rubber banding on a Minecraft server. It was also just very, very clunky, had a lot of bugs and easy to mishandle. I remember, there was this one bug–it got on my nerves a **lot**. I would hold `SHIFT` to sprint, turn around and––oh. He's gone. Turns out he just wanted to do a [backwards long jump](https://youtu.be/HbOR92AAcQA?t=72) every time I turned around while sprinting. And then I searched for help online: `AddForce();` was there to save my life.

**The lifesaver**

## I've decided to take this image down in the meantime due to privacy.

#### Imagine a custom explosion in action

Yes, I made the explosion before the enemy. Call me a slacker, I know. But in all seriousness, I think it turned out pretty...uhm––what's the right term? **_Decent?_** It was pretty easy to set up. But, remember my crucial beginner's error?
> I used:
`public GameObject gobj;` 

> Instead of:
`GameObject gobj = GetComponent<GameObject()>;`

> **Every. single. time.**

Yep. That's right. I assigned every body part to a `GameObject`. Super messy, I know. But the rest of the code, in my opinion, is very intuitive for no outsourced help. Decide for yourself next time we discuss this in the next episode, jampacked like a Lua documentation website. It's all about what was scrapped, how **not** to make rookie mistakes like me, and what I have currently. Back to the article. 

**The enemy _(So scary)_**

The first time I made the enemy, the script was fairly simple, but it kept piling—and piling, piling and overflowed like a landfill. Yet it was still mostly a breeze to setup—particularly thanks to the fact that enemies are, indeed, very stupid. If we look here at this picture:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/3ehoijxpo7vz5ujahbxy.jpeg)

###### *Censored for privacy

We see that the gun’s raycast reaches the enemy faster than the bullet. This was the biggest problem for a while, as I didn't want it to immediately kill him. "What if he moved out of the way?" was my thought process. So, I stuck with it for a while and eventually found a solution––and it was to create a tiny raycast on the bullet. I tried using Unity's particle system, but that didn't fit my bill, now that I needed raycasting, so I wrote a butt's length of code and fixed it.

**Artsy vibes only**

The resources I used were Pro Motion NG and FireAlpaca, both two amazing softwares. I draw the characters in Pro Motion NG and trace it and export it in FireAlpaca. Also, I am an idiot when it comes to these kinds of particles and rigging––so I tried to rig **a `.png`** before realizing you can't do that. So, I tried making a Transform animation _multiple times_, but to no avail. Finally, I just stopped trying for now and went back to the main game's progress.

**Final thoughts**

I loved writing this. Currently, I am _finally_ working on the boss! Tomorrow I will probably produce a Behind the Scenes edition. I’m pooped though, so good night to all for one and one for all.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/r14l5mk6iinpyx9stmam.jpeg)

As an update: I'll be going over the code in another, more in-depth episode of **_A Corrupted Journey_**. This is just an overview.