import React from 'react';
import styled from 'styled-components';

const Hamburger = () => {
  return (
    <StyledWrapper>
      <label htmlFor="burger" className="burger">
        <input id="burger" type="checkbox" />
        <span />
        <span />
        <span />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .burger {
    position: relative;
    width: 40px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    display: block;
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-50%);
  }

  .burger input:checked ~ span:nth-of-type(1) {
    top: 0;
    left: 5px;
    transform: rotate(405deg);
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    top: 28px;
    left: 5px;
    transform: rotate(-405deg);
  }`;

export default Hamburger;
