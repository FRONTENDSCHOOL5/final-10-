import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function LocalNav({ lists, ...props }) {
  const navigate = useNavigate();
  return (
    <LocalNavBar {...props}>
      {lists.map((el, i) => {
        console.log(el);
        return (
          <LocalList key={i}>
            <LocalListButton
              onClick={() => {
                navigate(el.nav);
              }}
            >
              {el.name}
            </LocalListButton>
          </LocalList>
        );
      })}
    </LocalNavBar>
  );
}

const LocalNavBar = styled.ul`
  width: ${(props) => props.width || "200px"};
  font-size: ${(props) => props.fontSize || "16px"};
  border-radius: 4px;
  border: 1px solid var(--gray200-color);
  box-sizing: border-box;
  background-color: white;
  position: relative;
  left: -216px;
  top: -160px;
  padding: 6px 6px;
  box-shadow: -2px 4px 6px 0 rgba(0, 0, 0, 0.08);

  li + li {
    border-top: 1px solid var(--gray200-color);
    padding-top: 4px;
  }
`;

const LocalList = styled.li``;

const LocalListButton = styled.button`
  display: block;
  width: 100%;
  text-align: center;
  padding: 14px 0;
  font-family: var(--font--Medium);
  cursor: pointer;

  &:hover {
    background-color: #f0ffed;
    transition: all 0.3s;
    color: var(--dark-sub-color);
  }
`;
