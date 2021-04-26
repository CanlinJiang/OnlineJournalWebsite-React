import HTMLText from "./HTMLText"
import React from "react";

describe("HTMLText tests", () => {
    it("renders correctly", () => {

        const articleBody = "<p>Amid the farm houses and barns dotting the Mad River Valley area of rural Vermont, five miles north of Sugarbush ski resort, Marisa Mauro is making butter.</p><p>About 700 pounds of it every week.</p><p>While she and her assistant pack up golden bricks of butter, they can stare out at panoramic views of lush green hills that go technicolor red and yellow in autumn and sparkly white in winter.</p><p>But there's no daydreaming here. Her business, Ploughgate Creamery at Bragg Farm, is booming, and her butter sells for $16 to $20 per pound to specialty shops, co-ops and Whole Foods grocery stores around the country.</p><p><q>I'd say the biggest difference with our butter is that it's handmade, and our hands are on every step of the process,</q> said Mauro, 33. <q>Two girls are cranking out a lot of butter.</q></p><p>Mauro's butter is rich and fatty, fresh but nutty, and it has a grassy tang that comes straight from the cows who made the cream. Those cows live just 30 miles down the road at Monument Farms. (Visit them to get fresh coffee milk, a New England original that adds sweet coffee flavor to cold milk.)</p><p>Mauro packs some of the butter without salt and mixes large sea salt crystals into the rest, selling it as a salted variety with little flakes of texture and even more flavor.</p>"
        
      const { container } = render(<HTMLText text={articleBody}/>);
      expect(container).toMatchSnapshot();
    });
  
  });