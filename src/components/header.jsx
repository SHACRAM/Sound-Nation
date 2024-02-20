export const Header = () => {
  return (
    <header className="bg-black flex justify-between">
      <div>
        <img
          src="../images/logo.png"
          alt="Logo du festival Sound Nation"
          className="ml-4 mt-2 mb-4"
        />
      </div>
      <div className="flex gap-1.5 items-start mt-2 mr-2">
        <img src="../images/fr 1.svg" alt="drapeau français" className="w-6" />
        <img
          src="../images/gb 1.svg"
          alt="drapeau du Royaume-Uni"
          className="w-6"
        />
      </div>
    </header>
  );
};
