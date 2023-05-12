

const TestCard = (tes) => {

    return (
    
          <div className="card card-compact w-96 bg-base-100 my-32 shadow-xl">
  <figure><img src={tes.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Hello</h2>
    <p>{tes.details}</p>
    </div>
    </div>

    );
    
};

export default TestCard;