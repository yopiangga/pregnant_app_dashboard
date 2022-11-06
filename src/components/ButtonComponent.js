import React from "react";

export function Btn1Active(props) {
  return (
    <button
      onClick={props.onTap}
      className="text-grey-900 bg-cyellow-300 rounded-md border text-xs border-cyellow-300 font-medium px-5 h-8"
    >
      {props.title}
    </button>
  );
}

export function Btn2Active(props) {
  return (
    <button className="text-grey-900 bg-cyellow-300 rounded-md border text-md border-cyellow-300 font-medium px-5 py-2 w-full">
      {props.title}
    </button>
  );
}

export function Btn1UnActive(props) {
  return (
    <button
      onClick={props.onTap}
      className="text-grey-900 bg-transparent rounded-md border text-xs border-cyellow-300 font-medium px-5 h-8"
    >
      {props.title}
    </button>
  );
}

export function Btn1ActiveShadow(props) {
  return (
    <button className="text-grey-900 bg-cyellow-300 rounded-md border text-xs border-cyellow-300 font-medium px-5 h-8 shadow-md">
      {props.title}
    </button>
  );
}

export function Btn3Active(props) {
  return (
    <button
      onClick={props.onTap}
      className="text-grey-900 bg-cyellow-300 rounded-md border text-md border-cyellow-300 font-semibold px-5 h-10 flex gap-2 justify-center items-center"
    >
      {props.icon}
      {props.title}
    </button>
  );
}
