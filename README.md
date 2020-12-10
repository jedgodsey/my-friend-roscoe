# READ ME

## HEADLINE
"MY Friend Roscoe" is a simple 'Tamagotchi' type online game based on the user's relationship with a digital urban raccoon.

## ABOUT THIS PROJECT
Given the parameters we received for our 'Tomagotchi' project, I tried to conceive of a real world animal that we might interact with that most people consider to be cute.  In terms of wild animals, Americans might commonly interact with skunks, opossums, deer, wild pigs, squirrels and a few other critters that remain wild amongst us.  I chose to focus on a raccoon because I found it to be  both ubiquitous and relatable.  They can be found in almost every inhabited area of the US and are both celebrated and scorned for their intelligence and mischievious activity.  Additionally, Raccoons do accept food and care from humans.  I felt that taking this relateable animal and placing him in the frame of a common setting in which a real person might interact with it would make the game more immersive and therefore more satisfying.

I've used javascript and jQuery to manipulate css and a minimalist html file to produce a simple, but relatively polished game.  This game should be playable with the same experience for anyone in the world with a screen, a keyboard and access to the internet.

I have included both my original wireframe and user stories below for reference.  My final product has some minor variation from the wire frame, as some design concerns during manufacturing produced some ultimately wiser choices in terms of styling.  I met the challenge of all of my user stories, save one.  My game does not predictably present itself on mobile devices.  I put some work into this, but ultimately not enough.  The game is playable on mobile but it's presentation falls far short of that on desktop.



## WIRE FRAME
![wireFrame](./resources/Project0-wire-frame.gif)

## User Stories
- Upon loading, users will be presented with a scene looking out the back door of a house in an urban area.  The door will be closed.
- A small animal (perhaps a raccoon) will be visible through the door.
- User will be presented with instructions about how to interact with this animal
- upon opening the door, the user will be  presented with several relevant statistics denoting the animal's status, specifically its 'hunger level', its 'tiredness rating' and it's 'boredness quotient'.  Actual terms TBD.
- these statistics should go down over time, and if they reach zero, the animal will die and the game will be over.
- a fourth statistic will be kept to denote the number of 'days' the user has been interacting with the animal.
- after some predetermined number of 'days', the animal will move on and the game will be over.
- the user will be presented with specific options that can improve the animals respective statisctics.  i.e. feed the animal and it will be less hungry.
- the animal itself will animate depending on its statistics and the users decisions.
- the game will visually denote the passage of time via a day/night animation.
- the game will present itself fashionably on both desktop and mobile devices.
