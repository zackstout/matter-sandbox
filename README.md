
## AIMS

[ ] figure out curved walls (just dropping them into a parabolic bowl would illustrate the tangent thing)
[ ] implement force-alteration on cannonball/monkey
[ ] make bouncing off some surfaces impart force
[ ] forget about objects once off-canvas
[ ] integrate angular and angular-material for the holy trinity: though it's pretty awesome how the mad fps simulates data binding for you
[ ] animate moving obstacles
[ ] overlay educational parabolic path
[ ] finesse constraints to make the cannonball into a flying monkey (Priority: Ultimate (funny ambiguity))

[ ] Give user ability to add obstacles, moving or static
[ ] Let user pick starting point, goal
[ ] Home screen shows New Game, Choose Level (activates after completion of level 1), View More Levels, Create a Level
[ ] implement a "test your world" functionality with spraying balls to see how things interact
[ ] but also probably want a really Test with starting at the designated starting point and ending at the indicated ending point

[ ] Implement timer and log it with each game completion
[ ] Permissions: can only do so and so after completing so and so
[ ] Animation on completion of a level; PUT route
[ ] User can post a new level (data gets stored as object i.e. world with properties of what goes where)
[ ] Data will be: type of shape; center coordinates; moving vs static; if moving: range, speed, randomness/frequency; spinning; angle

[ ] Transparent image of shape with indicated parameters shows up on the map; becomes opaque once added
[ ] User can VIEW, SORT, SEARCH THROUGH, and LIKE (or maybe just FAVORITE?) other users' levels
[ ] User can VIEW all levels they have created, and played through; can SORT by addedDate, Time, or only Faves
[ ] User can re-play a level (GET)
[ ] Show how many times a level has been played and liked and/or favorited
[ ] And also its fastest 3 runs and usernames
[ ] Make a tangent flash when hitting a curved wall!
[ ] One portal level, if we get there, could be cannon with angled roof so it could only shoot to the right, where it would have to arc a parabola up into a portal whose sister was on the right wall, high up, in order to hit the bucket on the left wall lower down.



## NOTES:

Ok good so it's easy to see where a user clicked, for the editor;
maybe SHIFT (or whatever) rotates all the platforms haha
want to make mousedown the angle changer and mouseup the throw?
or mousedown the force changer and mouseup the throw?

power up force with mouse pressdown
or maybe change angle like that, and power up with a slider?

just making 2d portal would be fucking dope ....just do that??
how to make a parabolic wall? no way is it that we have to alter the angle manually for each linear bit of wall...that'd be fuckin nuts ..no you just have to find a way to specify the rectangle via its endpoints rather than its center.

try to build a circular planetary system with forward velocity and inward acceleration due to gravity... i bet you can build it
