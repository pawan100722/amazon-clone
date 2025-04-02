export const PersonalizedContainer=()=>{
  return (
    <>
      <div className="personalized-container">
        <p>See Personalized recommendations</p>
        <button>Sign in</button>
        <div>
          New Customer? <a href="">Start Here</a>
        </div>
      </div>

      <div
        className="back-to-top"
        onClick={() =>
          scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        Back to Top
      </div>
    </>
  );
}