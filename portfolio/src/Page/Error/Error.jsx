import React from "react";
import "./Error.css";
import { Navigate, useNavigate } from "react-router-dom";

const funnyMessages = [
  {
    title: "🚀 Houston, we have a problem!",
    message:
      "Looks like this page got lost in space. Try navigating back before aliens abduct your browser!",
  },
  {
    title: "🕵️‍♂️ Page not found... or is it?",
    message:
      "We sent Sherlock Holmes to find this page. Even he came back confused. Maybe try searching again?",
  },
  {
    title: "🎮 404 – Page Respawn Needed!",
    message:
      "Uh-oh, this page has taken critical damage! Try refreshing or head back to base before the final boss finds you!",
  },
  {
    title: "📡 Lost in the multiverse!",
    message:
      "You just discovered a universe where this page doesn’t exist. Doctor Strange is on the way to fix it!",
  },
  {
    title: "⚠️ ERROR 404: Reality not found!",
    message:
      "You’ve glitched out of the Matrix! Take the red pill (or click home) to return to the real world.",
  },
  {
    title: "🍔 McPage Not Found!",
    message:
      "We searched the menu, but this page is not on the list. Maybe try some fries instead?",
  },
  {
    title: "🦸‍♂️ Avengers Disassembled!",
    message:
      "Iron Man couldn’t fix this page, and Hulk just smashed it. Better head back before Loki makes it worse!",
  },
  {
    title: "🏴‍☠️ Arrr, matey! Page lost at sea!",
    message:
      "We searched the seven seas but couldn’t find your page. Maybe a treasure map (or the home button) will help?",
  },
  {
    title: "🧙‍♂️ You shall not pass!",
    message:
      "Even Gandalf can’t grant access to this page. Better take another path (aka click home).",
  },
  {
    title: "🐉 404 – Page stolen by a dragon!",
    message:
      "Looks like Smaug decided this page belongs in his treasure hoard. We recommend heading back before he notices you!",
  },
  {
    title: "🍕 Pizza delivery failed!",
    message:
      "The page you ordered is out for delivery but got lost on the way. Try reordering from the homepage!",
  },
  {
    title: "🤯 ERROR 404 – Brain not found!",
    message:
      "Either you mistyped something, or our server had a brain freeze. Either way, try again!",
  },
  {
    title: "🦆 Quack! Page lost in a pond!",
    message:
      "A random duck stole this page. We’re negotiating for its return. Meanwhile, try navigating back!",
  },
  {
    title: "⏳ Page stuck in time!",
    message:
      "This page is lost in the past, present, or future. Try refreshing before the timeline collapses!",
  },
  {
    title: "🎤 Mic drop... and the page disappeared!",
    message:
      "This page was here... and then it wasn't. Maybe it’ll make a comeback tour soon!",
  },
  {
    title: "🤖 Beep boop! Page not found!",
    message:
      "Our AI overlords misplaced this page. If they allow it, you can head back to the homepage!",
  },
  {
    title: "🛸 404 – Page abducted by aliens!",
    message:
      "We tried calling NASA, but this page is somewhere beyond the Milky Way now!",
  },
  {
    title: "🏎️ Fast and... lost!",
    message:
      "This page was going too fast and drifted off the internet highway. Maybe check the home page?",
  },
  {
    title: "💡 Page not found, but here’s a fun fact!",
    message:
      "Did you know honey never spoils? Now that you’re enlightened, maybe head back home!",
  },
];

const Error = () => {
    const navigate = useNavigate();
  const randomMessage =
    funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

  return (
    <div className="ErrorContainer">
      <h2>{randomMessage.title}</h2>
      <p>{randomMessage.message}</p>
      <div
        className="githubbtn githubbtn1 github-link homeicon"
        onClick={() => navigate("/")}
      >
        <p>Home. Take me home.</p>
      </div>
    </div>
  );
};

export default Error;
