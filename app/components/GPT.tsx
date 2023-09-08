"use client";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import parse from "html-react-parser";
import { useChat } from "ai/react";

const GPT = () => {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();

  return (
    <GPTContainer>
      <GPTAnswer>
        {messages.length > 0
          ? messages.map((m) => (
              <div key={m.id} className="whitespace-pre-wrap">
                {m.role === "user" ? "User: " : "GPT: "}
                <span
                  className={m.role === "user" ? "font-bold" : "text-blue-600"}
                >
                  {m.content}
                </span>
              </div>
            ))
          : null}
      </GPTAnswer>
      <GPTForm
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          name="question"
          placeholder="질문을 입력하세요."
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">GO!</button>
      </GPTForm>
    </GPTContainer>
  );
};

export default GPT;

const GPTContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1024px;
`;

const GPTAnswer = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  background-color: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  placeholder {
    color: #333333;
  }
  height: 500px;
  resize: none;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;

const GPTForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
  input {
    flex: 1;
    height: 50px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 80px;
    padding: 10px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    color: #333333;
    font-weight: bold;
    background-color: #f5f5f5;
    border-radius: 10px;
  }
`;
