
/*deklarasi variabel*/
const friendList = document.getElementById("friend-list"); //elemen disimpan di friend-list dari halaman HTML
const nonFriendList = document.getElementById("non-friend-list");
const friends = []; //array kosong untuk menyimpan daftar teman
const nonFriends = []; //array kosong untuk menyimpan daftar bukan teman

/*daftar teman diperbarui*/
function updateFriendList() {
  friendList.innerHTML = ""; //menghapus isi dari elemen yang memiliki ID "friend-list"

  friends.forEach((friend) => { //loop setiap teman dari array friends
    const friendItem = createFriendItem(friend); //membuat elemen item teman dengan data teman yang diiterasi
    friendList.appendChild(friendItem); //Elemen item teman dimasukkan ke data web dengan ID friend-list
  });
}

/*daftar bukan teman diperbarui*/
function updateNonFriendList() {
  nonFriendList.innerHTML = ""; //menghapus elemen

  nonFriends.forEach((nonFriend) => {
    const nonFriendItem = createNonFriendItem(nonFriend);
    nonFriendList.appendChild(nonFriendItem);
  });
}

/*memuat elemen yang mewakili teman*/
function createFriendItem(friend) {
  const friendItem = document.createElement("li"); //membuat elemen baru
  friendItem.className = "friend"; //kelas untuk di CSS

  const img = document.createElement("img"); //utk foto
  img.src = friend.photo; //menghubungkan foto teman dengan gbr

  const friendInfo = document.createElement("div"); //membuat elemen untuk menampilkan informasi ttg teman
  friendInfo.innerHTML = `<strong>${friend.name}</strong><br> ${friend.id}`; //menampilkan nama dan ID

  const unfollowBtn = document.createElement("button"); //membuat elemen button
  unfollowBtn.textContent = "REMOVE"; //teks di button
  /* jika di click maka akan: */
  unfollowBtn.addEventListener("click", function () {
    friends.splice(friends.indexOf(friend), 1); //mengahpus teman dari array menggunakan splice
    nonFriends.push(friend); //menambahkan teman yang di hapus ke array nonFriends
    updateFriendList(); //update list teman
    updateNonFriendList(); //update list bukn teman
  });

  friendItem.appendChild(img); //menambahkan elemen gambar ke elemen teman
  friendItem.appendChild(friendInfo); //menambahkan elemen informasi teman
  friendItem.appendChild(unfollowBtn); //menambahkan tombol REMOVE ke elemen teman

  return friendItem; 
}
/*memuat elemen yang mewakili bukan teman*/
function createNonFriendItem(nonFriend) {
  const nonFriendItem = document.createElement("li"); //membuat elemen baru
  nonFriendItem.className = "non-friend"; //kelas untuk CSS

  const img = document.createElement("img"); //utk foto
  img.src = nonFriend.photo; //menghubungkan foto bkn teman dengan gbr
  img.className = "friend-img"; //mengatur class CSS

  const friendInfo = document.createElement("div"); //Menampilkan informasi yang bukan teman
  friendInfo.innerHTML = `<strong>${nonFriend.name}</strong><br> ${nonFriend.id}`; //menampilkan nama dan ID 

  const followBtn = document.createElement("button"); //buat elemen button
  followBtn.textContent = "ADD"; //teks di button
  followBtn.addEventListener("click", function () { //ketika diklik terjadi bbrp command
    nonFriends.splice(nonFriends.indexOf(nonFriend), 1); //menghapus orang yang bukan teman dari array nonFriends, menggunakan fungsi splice
    friends.push(nonFriend); //menambahkan orang yang bukan teman ke array
    updateFriendList(); 
    updateNonFriendList();
  });

  nonFriendItem.appendChild(img);
  nonFriendItem.appendChild(friendInfo);
  nonFriendItem.appendChild(followBtn);

  return nonFriendItem;
}

function clearInputFields() { //menghapus konten
  document.getElementById("friend-name").value = "";
  document.getElementById("friend-id").value = "";
  document.getElementById("friend-photo").value = "";
}

function updateFriendList() { //memperbarui tampilan daftar teman di halaman web
    friendList.innerHTML = "";
  
    friends.forEach((friend) => {
      const friendItem = createFriendItem(friend); //membuat elemen yang mewakili teman
      friendList.appendChild(friendItem);
    });
  
    updateFriendCount(); // Menambah ke dalam elemen daftar teman
  }
  
  function updateFriendCount() { //menghitunf jumlah teman dalam array friends
    const friendCountSpan = document.getElementById("friend-count");
    friendCountSpan.textContent = friends.length; //menghitung panjang array
  }
  
//menambahkan nama teman lalu langsung dimasukkan ke array nonFriends
// Initial friends and non-friends data
nonFriends.push({ name: "Xaviera", id: "@rsall_3", photo: "xaviera.JPEG" });
nonFriends.push({ name: "Adelia", id: "@kkcss15", photo: "Adel.JPEG" });
nonFriends.push({ name: "Malva", id: "@hasare__02", photo: "Malva.JPEG" });
nonFriends.push({ name: "Areen", id: "@crimsoncrym", photo: "Arin.JPEG" });
nonFriends.push({ name: "Shinta", id: "@deeruba", photo: "sinta.JPEG" });

/*update*/
updateFriendList(); 
updateNonFriendList();