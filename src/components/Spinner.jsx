const Spinner = () => {
  // A simple spinner/lodder 
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin [animation-iteration-count:infinite] "></div>
      </div>
    );
  };
  
  export default Spinner;