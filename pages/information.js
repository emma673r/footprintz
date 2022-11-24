import React from "react";
import Anchor from "../components/Anchor";
function information() {
  return (
    <>
      <h1>Information and documentation</h1>
      <h2>What is FOOTPRINTZ?</h2>
      <div>
        <p>
          Footprintz is a school project app developed for Advice. We are two
          students form KEA Multimedia Front-end line, Anna & Emma. The goal of
          footprints is to spread awareness about your carbon footprint and how
          much your online habits can affect the world.
        </p>

        <p>
          We want this app to be used as a conversation starter and a self
          consciousness tool. This app is developed in hope for it to be used in
          highschools to help new generations getting awareness about their
          daily online habits and help them build healthy and green online
          habits.
        </p>

        <p>
          Here you can test how much carbon you emit with your daily habits and
          get some tips on how to be better, or even on how to start being
          green💚
        </p>
      </div>
      <h3>WHY THIS VISUAL STYLE?</h3>
      <div>
        <p>
          Did you know that bright colours emits more CO2 than dark colours ?
          And that blue emits 25% more than green or red ? Did you also know
          that system fonts (the ones already built in you PCs) are much more
          sustainable than fancy and downloadable fonts are?
        </p>
        <p>
          This is why we have chosen these dark colours with some light and
          green as accent colours - we want to promote sustainable web therefore
          we must set an example and actually build a low CO2 cost App for you.
        </p>
        <p>
          Pictures and videos are really CO2 heavy but emojis and SVGs (the cool
          graphics we use, sag is a picture format) have a much lower cost.
        </p>
        <p>
          We tried to condense all relevant information in as little text and
          images as possible while still developing a cool app ♻️
        </p>
        <p>
          You might also notice that the information only loads when you demand
          it form the app. That way we avoid unnecessary loadings and make a
          greener web together🥳
        </p>
      </div>
      <h4>WHERE CAN I LEARN MORE?</h4>
      <p>
        If you scored high on your daily emits you might have seen some links
        with good tips and tricks on how to get you started or on how to get
        better at being sustainable online🥳 Here are those links and some
        extras for you.
      </p>
      <div>
        <Anchor href={"https://sustainablewebdesign.org/"}>
          General information on sustainable web design
        </Anchor>
        <Anchor
          href={
            "https://www.viessmann.co.uk/en/company/blog/the-worlds-digital-carbon-footprint.html"
          }
        >
          Digital carbon footprint explained
        </Anchor>
        <Anchor
          href={
            "https://www.greenjournal.co.uk/2022/06/how-to-be-more-environmentally-friendly-online/"
          }
        >
          How to become more sustainable online
        </Anchor>
        <Anchor
          href={
            "https://wayofbeing.co/blogs/news/12-easy-ways-to-minimize-your-digital-carbon-footprint"
          }
        >
          Minimize footprint
        </Anchor>
        <Anchor
          href={
            "https://nuvomagazine.com/daily-edit/how-to-reduce-your-digital-carbon-footprint"
          }
        >
          More on minimizing footprint
        </Anchor>
        <Anchor
          href={
            "https://blog.mozilla.org/en/internet-culture/deep-dives/digital-carbon-footprint/"
          }
        >
          Deep dive digital carbon footprint
        </Anchor>
        <Anchor
          href={
            "https://www.weforum.org/agenda/2021/12/digital-carbon-footprint-how-to-lower-electronics"
          }
        >
          How to lower electronics
        </Anchor>
        <Anchor
          href={"https://green-action-elt.uk/act-now/digital-carbon-footprint/"}
        >
          Act now: digital carbon footprint
        </Anchor>
        <Anchor
          href={
            "https://impakter.com/10-ways-to-reduce-your-digital-carbon-footprint/"
          }
        >
          10 ways to reduce
        </Anchor>
        <p>
          This sites helps you get even better than you already are:
          <Anchor
            href={"https://geekflare.com/reduce-digital-footprint-tools/"}
          >
            tools to reduce digital footprint
          </Anchor>
        </p>
        <Anchor href={"https://digitalbeacon.co/"}>
          Really cool tools you might want to check out!
        </Anchor>
      </div>
      <h5>WHERE DID YOU PULL YOUR INFO FROM?</h5>
      <p>
        Here is an exhaustive list of our sources. Data information and
        translation: Colours and fonts — sustainable web info: Green tech info :
      </p>
      <p>
        !All data has been collected form serious sources but because of lack of
        certain types of data, the numbers are a little subjective.
      </p>
    </>
  );
}

export default information;
