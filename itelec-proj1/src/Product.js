function Product(props) {
  let isSoldout = props.soldout ? 1 : 0;

  return (
    <div className="Products" style={{ filter: `grayscale(${isSoldout})` }}>
      <div class="card">
        <img src={props.photoname} class="card-img-top" alt="..." />
        <div class="card-body">
          <div className="d-flex align-items-center">
            <p className="card-text text-start m-0 flex-fill">
              {props.name} {props.soldout ? "[Sold Out]" : ""}
            </p>
            <span>
              <img src="/icons/heart.svg" width="15" className="mx-2" />
              {props.likes}
            </span>
            <span>
              <img src="/icons/eye.svg" width="15" className="mx-2" />
              {props.views}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
