function BetweenSections({tColor="red" , bColor="red"}) {
  const styles = {
    background: `linear-gradient(180deg, ${tColor}  , ${bColor} )`,
  };

  return (
    <div className={`h-28 w-full relative`}
    style={styles}
    ></div>
  );
}

export default BetweenSections