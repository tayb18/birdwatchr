# Birds of NY

![:image](https://img1.etsystatic.com/049/0/6289898/il_fullxfull.711382185_hm60.jpg)

You've just started your first day at the dev agency professionalnobodies.biz

The previous developer left in a hurry to work on the Bernie Sanders campaign
leaving you as the lead developer on a new birdfinder app.

"She said she was just about to implement mongodb" says the 53-year-old office
intern, reading off a Post-It note.

She hands you the crumpled note with the following tasks

- [x] Resignation Letter
- [ ] Implement mongodb
- [ ] when a user visits `/sightings/new` show a form to add a bird's name
- [ ] expose an API. when a user visits `api/sightings` render all the sightings as JSON

Next steps

The next day you run into your project manager by the photocopier. "Nice work, but
I want to see the 3 most recent sightings on the index page and include the location.
I think it'll really set us apart in the bird watching biz," she says, printing
out her resume.

You scribble down onto a Post-It note

- [ ] Store date information
- [ ] Show last 3 sightings on index
- [ ] Add address location to form

As you pass the UX designer hunched over the fax machine she asks if you know the
zipcode for Vermont.  "If only it was as easy to look up as it is to geocode addresses
with the [NPM package geocoder](https://www.npmjs.com/package/geocoder)." she chuckles.

You jot down the following onto a Post-It note

- [ ] geocode locations and store their lat/long?
- [ ] figure out UX designer's name

The CEO calls you into her office, mutes the TED Talk she's watching and says "You know,
since getting out of Rikers I've heard a ton about this AJAX thing. I want you to
put together a demo page that I can show to our shareholders. I'll tell them to
go to /demo and click on a link and see all our bird data. And then I want them
to type in an address and send back the lat/long all with AJAX."

- [ ] create '/demo' page
- [ ] ajax the bird data and render it
- [ ] ajax a location and geocode it

"People make mistakes!" you hear the receptionist sobbing on the phone. This
gets you thinking "maybe we should be able to edit and update bird sightings!"

- [ ] add edit functionality
- [ ] get receptionist a tissue

You've scored a data via Coffee meets Bagel with "WebBoi87." "His name is Lance
and it says he's a dev too. Look at this online portfolio!" you say to your
roommate. "Didn't you find some [notes](notes.md) on deployment? Maybe you should get your birdapp deployed so you have something to talk about," says your roommate. "Good idea, mom."

- [ ] go over deployment notes
- [ ] deploy app to heroku
- [ ] get own apartment

One your second Coffee meets Bagel date with Lance, you #humblebrag about your sweet
new job as a developer. "This text looks kind of small, did you set a
[view port](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)?"
Lance says peering up from behind his Nokia Lumia.
You cough up into your riesling and mutter "They must not have deployed my changes"
and then scribble onto your hand.

- [ ] Don't date devs
- [ ] Add a viewport

At your project manager's going away party you make small talk with the still
unnamed UX designer.  "Have you read this blog post on GeoSpatial queries? What if
we could show bird sightings by proximity to the user?? Gimme that Post-It!"

She scribbles down the following

- [ ] http://tugdualgrall.blogspot.com/2014/08/introduction-to-mongodb-geospatial.html
- [ ] https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
- [ ] Get a user's location and query db for locations
- [ ] Make more eye contact
