function makeGrid() {

  let tableHeight=$("#inputHeight").val();
  let tableWidth=$("#inputWidth").val();
  let i=0;
  let colorPicker= $("#colorPicker").val();
  while(i<tableHeight){
    $("table").append("<tr></tr>");
    i++
  }
  for (i=0; i<tableWidth; i++){$("table tr")}.append("<td></td>");}
});
  $("body").on("click","table tr td", fuction(){let colorPicker=$("colorpicker").val();
  $ (this).css("background-color",colorPicker);
});
  $("#submit").click(fuction(){$("table").html("");
    makeGrid()})