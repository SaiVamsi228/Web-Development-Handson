function TodoItem1() {

  let todoName = "Buy Milk"
  let todoDate = "4/10/2023"
  return <div class="container">
      <div class="row  sv-row">
        <div class="col-6">
            {todoName}
        </div>
        <div class="col-4">
            {todoDate}
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger sv-button">
            Delete
          </button>
        </div>
      </div>
    </div>
}

export default TodoItem1;
