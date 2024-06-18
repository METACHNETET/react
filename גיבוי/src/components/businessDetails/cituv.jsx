import React, { useEffect } from 'react';
import gsap from 'gsap';

const ML3Animation = () => {
  useEffect(() => {
    const textWrapper = document.querySelector(".ml3");
    const text = textWrapper.textContent.trim();
    textWrapper.innerHTML = "";
    text.split("").forEach((char, index) => {
      const letter = document.createElement("span");
      letter.style.opacity = 0;
      letter.style.display = "inline-block";
      letter.style.lineHeight = "1em";
      letter.textContent = char === " " ? "\xa0" : char;
      textWrapper.appendChild(letter);
    });

    gsap
      .timeline({
        repeat: -1
      })
      .to(".ml3 span", {
        opacity: 1,
        ease: "power1.inOut",
        duration: 0.25,
        stagger: 0.15
      })
      .to(".ml3", {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.5,
        delay: 1
      });
  }, []);

  return (
    <h1 className="ml3">ורכשת םתא וזה היצקרטאה תא</h1>
  );
};

export default ML3Animation;
