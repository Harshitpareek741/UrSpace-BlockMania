import React, { useEffect } from "react";

const CustomizeChar: React.FC<{
  name: string;
  color: string;
  setIsCustomized: React.Dispatch<React.SetStateAction<boolean>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setColour: React.Dispatch<React.SetStateAction<string>>;
}> = ({ name, color, setIsCustomized, setName, setColour }) => {
  useEffect(() => {
    // Automatically set the provided name and color and mark customization as complete
    setName(name);
    setColour(color);
    setIsCustomized(true);
  }, [name, color, setIsCustomized, setName, setColour]);

  return (
    <div className="flex min-h-full flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-300">
          Cube Game
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Loading game with provided details...
        </p>
      </div>
    </div>
  );
};

export default CustomizeChar;
