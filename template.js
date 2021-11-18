function template(bands) {
  return `<div class="col-12 col-md-6 mb-4">
        <div class="card d-flex flex-row">
          <div class="col-4 crdimgdiv">
            <img
            src="${bands.img}"
            alt="${`${bands.name} image`}"
            class="rounded crdimg"/>
          </div>
         
          <div class="card-body col-8">
            <h5 class="card-title text-center">${bands.name}</h5>
            <p class="card-text card-date text-center">${bands.date}</p>
            <p class="card-text card-content">${bands.description}</p>
          </div>
        </div>
      </div>`;
}

export default template;
