import updateData from "./updateData"
import React from "react";


describe("updateData tests", () => {
    it("renders correctly", () => {
       const url = global.url + "1"
        const article = {
            "title": "Butter is back, just in time for the holidays",
            "mood": "Peaceful",
            "status": "Read",
            "body": "<p>Amid the farm houses and barns dotting the Mad River Valley area of rural Vermont, five miles north of Sugarbush ski resort, Marisa Mauro is making butter.</p><p>About 700 pounds of it every week.</p><p>While she and her assistant pack up golden bricks of butter, they can stare out at panoramic views of lush green hills that go technicolor red and yellow in autumn and sparkly white in winter.</p><p>But there's no daydreaming here. Her business, Ploughgate Creamery at Bragg Farm, is booming, and her butter sells for $16 to $20 per pound to specialty shops, co-ops and Whole Foods grocery stores around the country.</p><p><q>I'd say the biggest difference with our butter is that it's handmade, and our hands are on every step of the process,</q> said Mauro, 33. <q>Two girls are cranking out a lot of butter.</q></p><p>Mauro's butter is rich and fatty, fresh but nutty, and it has a grassy tang that comes straight from the cows who made the cream. Those cows live just 30 miles down the road at Monument Farms. (Visit them to get fresh coffee milk, a New England original that adds sweet coffee flavor to cold milk.)</p><p>Mauro packs some of the butter without salt and mixes large sea salt crystals into the rest, selling it as a salted variety with little flakes of texture and even more flavor.</p>",
            "shortQuote": "Amid the farm houses and barns dotting the Mad River Valley area of rural Vermont, five miles north of Sugarbush ski resort, Marisa Mauro is making butter.",
            "author": "Guerra Clemons",
            "date": "2018-11-21",
            "length": "Long",
            "image_url": "https://cdn.cnn.com/cnnnext/dam/assets/181119170125-ploughgate-creamery-butter-ball-super-169.jpg",
            "original_page_url": "https://www.cnn.com/travel/article/how-to-make-butter-ploughgate-creamery-vermont/index.html",
            "id": 100
          }
      const { container } = render(updateData({url, article}));
      expect(container).toMatchSnapshot();
    });
  
  });