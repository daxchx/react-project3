import { useState } from "react";

interface ItemProps {
  value: string | number;
  label: string;
  onChange: any;
}

function Item({ value, label, onChange }: ItemProps) {
  return (
    <>
      <div className="pb-4">
        <label
          htmlFor={label}
          className="inline-block mb-1 p-1 rounded bg-gray-900 text-xs text-white"
        >
          {label}
        </label>
        <input
          className="w-full p-1 border rounded bg-gray-100"
          id={label}
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default function App() {
  const [decimal, setDecimal] = useState<string | number>("");
  const [binary, setBinary] = useState<string | number>("");
  const [hexadecimal, setHexadecimal] = useState<string | number>("");

  const [result, setResult] = useState("");

  function handleDecimal(e: any) {
    let target = +e.target.value;
    setDecimal(target ? target : "");
    setBinary(target ? target.toString(2) : "");
    setHexadecimal(target ? target.toString(16) : "");
    setResult("10進数 - " + target.toString());
  }

  function handleBinary(e: any) {
    let target = e.target.value;
    setDecimal(parseInt(target, 2) ? parseInt(target, 2) : "");
    setBinary(parseInt(target, 2) ? target : "");
    setHexadecimal(parseInt(target, 2) ? parseInt(target, 2).toString(16) : "");
    setResult("2進数 - " + target);
    console.log(parseInt("1000222", 2));
  }

  function handleHexadecimal(e: any) {
    let target = e.target.value;
    setDecimal(parseInt(target, 16) ? parseInt(target, 16) : "");
    setBinary(parseInt(target, 16) ? parseInt(target, 16).toString(2) : "");
    setHexadecimal(target != "" ? target : "");
    setResult("16進数 - " + target);
  }

  return (
    <div className="max-w-xs mx-auto">
      <h1 className="mb-4 py-4 border-b text-xl font-bold text-center">
        数字が100以上か判定
      </h1>
      <Item value={decimal} label="10進数" onChange={handleDecimal} />
      <Item value={binary} label="2進数" onChange={handleBinary} />
      <Item value={hexadecimal} label="16進数" onChange={handleHexadecimal} />
      {+decimal >= 100 && (
        <div className="inline-block p-1 bg-green-100 border border-green-500 rounded text-base text-green-500">
          {result}
        </div>
      )}
      {+decimal < 100 && +decimal > 0 && (
        <div className="inline-block p-1 bg-red-100 border border-red-500 rounded text-base text-red-500">
          {result}
        </div>
      )}
    </div>
  );
}
