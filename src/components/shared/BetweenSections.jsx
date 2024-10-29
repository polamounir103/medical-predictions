function BetweenSections({tColor , bColor}) {
  const styles = {
    background: `linear-gradient(180deg, ${tColor}  , ${bColor} )`,
  };

  return (
    <div className={`h-20 w-full relative`}
    style={styles}
    ></div>
  );
}

export default BetweenSections