var friends = [
    {
        name: "Thanos",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Famp.insider.com%2Fimages%2F5ae75d4ebd967122008b4623-750-562.jpg&imgrefurl=https%3A%2F%2Fwww.insider.com%2Favengers-villain-thanos-is-thicc-fans-2018-4&docid=yT6eGq7n90YPhM&tbnid=87PVtiM52aDdnM%3A&vet=10ahUKEwjnpbipwtTkAhVDUKwKHQTNB-0QMwiCASgGMAY..i&w=750&h=562&bih=716&biw=455&q=thanos&ved=0ahUKEwjnpbipwtTkAhVDUKwKHQTNB-0QMwiCASgGMAY&iact=mrc&uact=8",
        scores: [3, 4, 4, 4, 4, 2, 6, 7, 5, 5]
    },
    {
        name: "Jimmy Fallon",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpmcvariety.files.wordpress.com%2F2018%2F07%2Fnup_179104_0169-11-e1559115396717.jpg%3Fw%3D910%26h%3D563%26crop%3D1&imgrefurl=https%3A%2F%2Fvariety.com%2F2019%2Ftv%2Fnews%2Fjimmy-fallon-tonight-show-nbc-opening-credits-the-roots-1203227606%2F&docid=tuMlnykFMK2L1M&tbnid=c2PhqLR608D0cM%3A&vet=10ahUKEwj7_Oi3wdTkAhVQY6wKHUYDCKIQMwh8KAAwAA..i&w=910&h=563&bih=716&biw=455&q=jimmy%20fallon&ved=0ahUKEwj7_Oi3wdTkAhVQY6wKHUYDCKIQMwh8KAAwAA&iact=mrc&uact=8",
        scores: [3, 4, 4, 5, 5, 7, 7, 5, 5]
    },
    {
        name: "Oliver Twist",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.guim.co.uk%2Fimg%2Fstatic%2Fsys-images%2FGuardian%2FPix%2Fpictures%2F2011%2F12%2F16%2F1324051452345%2FMark-Lester-as-Oliver-Twi-007.jpg%3Fwidth%3D300%26quality%3D85%26auto%3Dformat%26fit%3Dmax%26s%3Db3243b0254afc3aaf481e851a4b491ec&imgrefurl=https%3A%2F%2Fwww.theguardian.com%2Fbooks%2Fbooksblog%2F2011%2Fdec%2F23%2F1&docid=TrV51smnhqB5ZM&tbnid=8cHswfsHKfTO8M%3A&vet=10ahUKEwiK8_KpwdTkAhULnKwKHQy5BSkQMwiQASgQMBA..i&w=300&h=180&bih=716&biw=455&q=oliver%20twist&ved=0ahUKEwiK8_KpwdTkAhULnKwKHQy5BSkQMwiQASgQMBA&iact=mrc&uact=8",
        scores: [3, 2, 4, 9, 4, 2, 6, 7, 5, 5]
    },
    {
        name: "Mr. Rogers",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.wesa.fm%2Fsites%2Fwesa%2Ffiles%2Fstyles%2Fx_large%2Fpublic%2F201604%2Ffred_rogers.jpg&imgrefurl=https%3A%2F%2Fwww.wesa.fm%2Fpost%2Fcounterculture-approach-fred-rogers&docid=_-IvnjOYAFbisM&tbnid=EhmXpnHk7u0btM%3A&vet=10ahUKEwiMhfGiwdTkAhUFDKwKHYyaD4YQMwh8KAAwAA..i&w=960&h=960&bih=716&biw=455&q=mr%20rogers&ved=0ahUKEwiMhfGiwdTkAhUFDKwKHYyaD4YQMwh8KAAwAA&iact=mrc&uact=8",
        scores: [3, 4, 2, 4, 8, 6, 6, 7, 5, 5]
    },
    {
        name: "Bill Burr",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2.wp.com%2Fwww.nationalreview.com%2Fwp-content%2Fuploads%2F2019%2F09%2Fbill-burr-paper-tiger.jpg%3Ffit%3D1200%252C700%26ssl%3D1&imgrefurl=https%3A%2F%2Fwww.nationalreview.com%2F2019%2F09%2Fbill-burr-paper-tiger-netflix-special-mostly-brilliant%2F&docid=hhp06G3Wt_op3M&tbnid=sOkEmlTCNbTUBM%3A&vet=10ahUKEwiahNeYwdTkAhUF-6wKHdtRA1MQMwh5KAAwAA..i&w=1200&h=700&bih=716&biw=455&q=bill%20burr&ved=0ahUKEwiahNeYwdTkAhUF-6wKHdtRA1MQMwh5KAAwAA&iact=mrc&uact=8",
        scores: [3, 4, 2, 6, 4, 6, 6, 7, 5, 9]
    },
    {
        name: "Travis Scott",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fe%2Fe8%2FTravis_Scott_April_2017.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTravis_Scott&docid=pY5dFbcptSj7mM&tbnid=UgVpDxFgxzTsXM%3A&vet=10ahUKEwjph-ePwdTkAhVJRqwKHTwKD_0QMwh8KAAwAA..i&w=1517&h=2200&bih=716&biw=455&q=travis%20scott&ved=0ahUKEwjph-ePwdTkAhVJRqwKHTwKD_0QMwh8KAAwAA&iact=mrc&uact=8",
        scores: [3, 4, 3, 4, 6, 2, 6, 7, 7, 5]
    },
    {
        name: "Bernie Sanders",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.washingtonpost.com%2Fresizer%2FPCKdNoyNGR1ojFosC0BaorMFU68%3D%2F1484x0%2Farc-anglerfish-washpost-prod-washpost.s3.amazonaws.com%2Fpublic%2FD6SN65GU24I6TCJEDW35VR4X7M.jpg&imgrefurl=https%3A%2F%2Fwww.washingtonpost.com%2Foutlook%2F2019%2F09%2F12%2Fstop-calling-bernie-sanders-alexandria-ocasio-cortez-liberals%2F&docid=CLmo1JbhUKhnJM&tbnid=BDd7VjKJlJPYeM%3A&vet=10ahUKEwj04aiGwdTkAhUCXa0KHf1-B4cQMwh7KAAwAA..i&w=1484&h=989&itg=1&bih=716&biw=455&q=bernie%20sanders&ved=0ahUKEwj04aiGwdTkAhUCXa0KHf1-B4cQMwh7KAAwAA&iact=mrc&uact=8",
        scores: [3, 3, 4, 9, 4, 2, 6, 8, 5, 3]
    },
    {
        name: "Adam Sandler",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa5%2FAdam_Sandler_2011_%2528Cropped%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAdam_Sandler&docid=N9bht-zNmUSi6M&tbnid=5MLuksfyfM-wbM%3A&vet=10ahUKEwjV3fr_wNTkAhVBI6wKHV40ARQQMwh8KAAwAA..i&w=1014&h=1394&itg=1&bih=716&biw=455&q=adam%20sandler&ved=0ahUKEwjV3fr_wNTkAhVBI6wKHV40ARQQMwh8KAAwAA&iact=mrc&uact=8",
        scores: [9, 4, 7, 4, 4, 2, 4, 7, 5, 8]
    },
    {
        name: "Michael Scott",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fd%2Fdc%2FMichaelScott.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMichael_Scott_(The_Office)&docid=yrcq9RoYsQBKWM&tbnid=mMZKEfu3VUt9KM%3A&vet=10ahUKEwiz_vnywNTkAhVIs6wKHWhrANMQMwh8KAAwAA..i&w=240&h=272&bih=716&biw=455&q=michael%20scott&ved=0ahUKEwiz_vnywNTkAhVIs6wKHWhrANMQMwh8KAAwAA&iact=mrc&uact=8",
        scores: [6, 5, 4, 1, 4, 2, 6, 7, 8, 8]
    },
    {
        name: "John Wayne",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F82%2F136182-050-6BB308B7%2FJohn-Wayne.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FJohn-Wayne&docid=64jZzJjGgWwq7M&tbnid=e57WcX7OIl3wfM%3A&vet=10ahUKEwjkp9fUwNTkAhVRCKwKHVKbAPgQMwh8KAAwAA..i&w=1239&h=1600&bih=716&biw=455&q=john%20wayne&ved=0ahUKEwjkp9fUwNTkAhVRCKwKHVKbAPgQMwh8KAAwAA&iact=mrc&uact=8",
        scores: [8, 4, 4, 6, 4, 2, 6, 9, 8, 9]
    }
];

module.exports = friends;
