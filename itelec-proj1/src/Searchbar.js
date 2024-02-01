function SearchBar(props){
  return(
    <div className='SearchBar'>
      <div class = "d-flex rounded">
        <div class="d-flex flex-row w-50">
        <input class = 'form-control rounded-4'></input>
      </div>
        <div class="d-flex  w-50 gap-4" >
          <div class="p-2">Projects</div>
          <div class="p-2">Assets</div>
          <div class="p-2">Images</div>
          <div class="p-2">People </div>
          <div class="p-2">Pototypes </div>
          <div class="p-2">Streams</div>
          <div class="p-2">Moodboards</div>
        </div>
      </div>
       
    </div>
  );
}

export default SearchBar;