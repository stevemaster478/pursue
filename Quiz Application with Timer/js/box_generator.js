function getHotels(){
    var request = new XMLHttpRequest();
    var url="http://localhost:8080/hotels";

    request.open("GET",url, true);
    request.send();
   

    request.onreadystatechange=function(){
        if(this.readyState == 4 && this.status ==200){
           hotels =JSON.parse(this.responseText);
           printHotels(hotels);

           var filtered =null;
           document.getElementById("input-search").addEventListener("keyup", function(){
               var pattern = this.value;
               if(pattern){
                   filtered = hotels.filter(function(h){
                       return h.name.indexOf(pattern)!= '-1'
                   });
                   printHotels(filtered);
               }else{
                   printHotels(hotels);
               }

           }
           
           )
        }
       
    };
    
}

function printHotels(arr){

    document.getElementById("inner_container_list_item").innerHTML="";
    var i;
    var j;
    
for(i=0; i<arr.length; i++){
    /**creo elemento box preview */
    var box_preview= document.createElement("div");
    box_preview.className="box_preview";
/**creo elemento box preview header */
    var box_preview_header= document.createElement("div");
    box_preview_header.className="box_preview_header";
   var box_preview_header_title=document.createElement("div");
box_preview_header_title.className="box_preview_header_title";
box_preview_header_title.innerHTML =arr[i].name;
box_preview_header.appendChild(box_preview_header_title);
box_preview.appendChild(box_preview_header);
/**box preview body */
    var box_preview_body= document.createElement("div");
    box_preview_body.className="box_preview_body";

    var firstrow='<div class"row">';
    for(j=0; j<+arr[i].stars; j++){
        firstrow +='<img src="assets/img/star.png" class="star" alt=""/>';

    }
    firstrow +='<div class"column_left"><p>phone:<br><strong>' +arr[i].phone+'</strong></p></div>';
    firstrow +='<div class"right">';
    
    firstrow += '</div></div>';

    var secondrow= '<div class="row">';
    secondrow += '<div class="column-left"><p>Email: <br/><strong>'+arr[i].email+'</strong> </p></div>';
    secondrow +=  '<div class="column-right"></div>';
    secondrow += '</div>';

    var address='<div>';
    address += '<address> Address: <br>';
    address += ''+arr[i].address.streetAddress+''+arr[i].address.city+', '+arr[i].address.country+'-'+arr[i].address.zipCode+'</address>';
    address += '</div>';

    box_preview.appendChild(box_preview_body);
    box_preview_body.insertAdjacentHTML('afterbegin', address);
    box_preview_body.insertAdjacentHTML('afterbegin', secondrow);
    box_preview_body.insertAdjacentHTML('afterbegin', firstrow);


    var box_preview_footer= document.createElement("div");
    box_preview_footer.className="box_preview_footer";
    box_preview_footer.innerHTML='<a href="#" class="button button1" onclick="viewHotel(\''+arr[i].id+'\')"> View More </a>';
    box_preview.appendChild(box_preview_footer);
    document.getElementById("inner_container_list_item").appendChild(box_preview);
}


}

function viewHotel(id){
    var i=0;
    var hotel= null;
    var dettaglio_titolo="";
    var dettaglio_body="";
    for(i=0; i<hotels.length; i++){
        if(hotels[i].id==id) hotel= hotels[i];
    }
    dettaglio_titolo += '<div>'+ hotel.name + '';
    for(k=0;k<hotel.stars; k++){
        dettaglio_titolo += '<img src="assets/img/star.png" class="star" alt=""/>';

    }
    dettaglio_titolo +='</div>';
    dettaglio_body+='<div>'+ hotel.longDescription+'</div>';
    dettaglio_body+='<div class="box-container">';

    dettaglio_body+= getHtmlHotelDetailBox('Number of rooms', 'assets/img/room.png', hotel.rooms, 'yellow');
    dettaglio_body+= getHtmlHotelDetailBox('Phone', 'assets/img/phone.png', hotel.phone, 'orange');
    dettaglio_body+= getHtmlHotelDetailBox('Email', 'assets/img/email.png', hotel.email, 'red');
    dettaglio_body+= getHtmlHotelDetailBox('Website', 'assets/img/web.png', hotel.website, 'green');

    dettaglio_body+='</div>';
    dettaglio_body+='<div>';
    dettaglio_body+= '<address>Address:<br>';
    dettaglio_body+=''+hotel.address.streetAddress+', '+ hotel.address.city+', '+hotel.address.country+' - '+hotel.address.zipCode+'';
    dettaglio_body+='</address></div>';
    
    document.getElementById("inner_container_list_item").style.display ="none";
    document.getElementById("inner_container_detail").style.display="block";
    document.getElementById("box-detail-title").innerHTML=dettaglio_titolo;
    document.getElementById("box-detail-body").innerHTML=dettaglio_body;

}

function getHtmlHotelDetailBox(title, img, info, color){
    str_code="";
    str_code += '<div class ="hotel-detail-box '+ color+'">';
    str_code+= '<p><small>'+title+'</small><br><img src="'+img+'"class = "star" alt =""/><br>';
    str_code+='<strong>'+info+'</strong></p>';
    str_code+='</div>';
    return str_code;

}

function goback(){
    document.getElementById("inner_container_list_item").style.display ="block";
    document.getElementById("inner_container_detail").style.display="none";
}