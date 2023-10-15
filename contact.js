let schools = {
    "Argyle MS":"https://www2.montgomeryschoolsmd.org/schools/argylems/staff/directory#Guidance/Counseling",
    "Cabin John MS":"https://www2.montgomeryschoolsmd.org/schools/cabinjohnms/staff/directory/#Counseling_Office",
    "William H. Farquhar MS":"https://www2.montgomeryschoolsmd.org/schools/farquharms/staff/directory/#Guidance",
    "John T. Baker MS":"https://www2.montgomeryschoolsmd.org/schools/bakerms/staff/directory/#Counseling_Office/Registrar",
    "Roberto W. Clemente MS":"https://www2.montgomeryschoolsmd.org/schools/clementems/staff/directory/#Counseling",
    "Forest Oak MS":"https://www2.montgomeryschoolsmd.org/schools/forestoakms/staff/directory/#Counseling",
    "Benjamin Banneker MS":"https://www2.montgomeryschoolsmd.org/schools/bannekerms/staff/directory/#Counseling_Services",
    "Eastern MS":"https://www2.montgomeryschoolsmd.org/schools/easternms/staff/directory/#Counseling",
    "Robert Frost MS":"https://www2.montgomeryschoolsmd.org/schools/robertfrostms/staff/directory/#Counseling_Services",
    "Briggs Chaney MS":"https://www2.montgomeryschoolsmd.org/schools/briggschaneyms/staff/directory/#Counseling_Department",
    "Gaithersburg MS":"https://www2.montgomeryschoolsmd.org/schools/gaithersburgms/staff/directory/#Counseling",
    "Dr. Martin Luther King, Jr. MS":"https://www2.montgomeryschoolsmd.org/schools/mlkms/staff/directory/#Guidance",
    "A. Mario Loiederman MS":"https://www2.montgomeryschoolsmd.org/schools/loiedermanms/staff/directory/#Counseling",
    "Herbert Hoover MS":"https://www2.montgomeryschoolsmd.org/schools/hooverms/students/staff/directory/#Counseling",
    "Montgomery Village MS":"https://www2.montgomeryschoolsmd.org/schools/mvms/staff/directory/#Counseling_Office",
    "Francis Scott Key MS":"https://www2.montgomeryschoolsmd.org/schools/fskms/staff/directory/#Counseling_Office",
    "Kingsview MS":"https://www2.montgomeryschoolsmd.org/schools/kingsviewms/staff/directory/#Counseling_Services",
    "Lakelands Park MS":"https://www2.montgomeryschoolsmd.org/schools/lakelandsparkms/staff/directory/#Counseling",
    "Neelsville MS":"https://www2.montgomeryschoolsmd.org/schools/neelsvillems/staff/directory/#Guidance",
    "Rosa M. Parks MS":"https://www2.montgomeryschoolsmd.org/schools/rosaparksms/staff/directory/#Counseling_Services",
    "Redland MS":"https://www2.montgomeryschoolsmd.org/schools/redlandms/counseling/",
    "Newport Mill MS":"https://www2.montgomeryschoolsmd.org/schools/newportmillms/staff/directory/#Counseling_Services",
    "John Poole MS":"https://www2.montgomeryschoolsmd.org/schools/poolems/staff/directory/#Counseling",
    "Ridgeview MS":"https://ww2.montgomeryschoolsmd.org/directory/directory_Boxschool.aspx?processlevel=03105",
    "North Bethesda MS":"https://www2.montgomeryschoolsmd.org/schools/northbethesdams/staff/directory/#Counseling_Services",
    "Thomas W. Pyle MS":"https://www2.montgomeryschoolsmd.org/schools/pylems/staff/directory/#School_Counseling",
    "Rocky Hill MS":"https://www2.montgomeryschoolsmd.org/schools/rockyhillms/staff/directory/#Counseling_Services",
    "Parkland MS":"https://www2.montgomeryschoolsmd.org/schools/parklandms/staff/directory/#Counseling_Department",
    "Shady Grove MS":"https://www2.montgomeryschoolsmd.org/schools/shadygrovems/staff/directory/#Counseling",
    "Sligo MS":"https://www2.montgomeryschoolsmd.org/schools/sligoms/staff/directory/#Guidance/Counseling_Office",
    "Julius West MS":"https://www2.montgomeryschoolsmd.org/schools/westms/staff/directory/#Counseling_Office",
    "Odessa Shannon MS":"https://www2.montgomeryschoolsmd.org/schools/shannonms/staff/directory/#Counseling",
    "Takoma Park MS":"https://www2.montgomeryschoolsmd.org/schools/takomaparkms/staff/directory/#School_Counseling",
    "Westland MS":"https://www2.montgomeryschoolsmd.org/schools/westlandms/staff/directory/#Counseling",
    "Silver Creek MS":"https://www2.montgomeryschoolsmd.org/schools/silvercreekms/staff/directory/#Counseling",
    "Tilden MS":"https://www2.montgomeryschoolsmd.org/schools/tildenms/staff/directory/#Counseling",
    "White Oak MS":"https://www2.montgomeryschoolsmd.org/schools/whiteoakms/staff/directory/#Guidance",
    "Hallie Wells MS":"https://ww2.montgomeryschoolsmd.org/directory/directory_Boxschool.aspx?processlevel=03345",
    "Earle B. Wood MS":"https://www2.montgomeryschoolsmd.org/schools/woodms/staff/directory/#Counseling",
    "Silver Spring International MS":"https://www2.montgomeryschoolsmd.org/schools/ssims/staff/directory/#Counseling_Office",
    "Bethesda-Chevy Chase HS":"https://www2.montgomeryschoolsmd.org/schools/bcchs/staff/directory/#Counseling",
    "Clarksburg HS":"https://www2.montgomeryschoolsmd.org/schools/clarksburghs/staff/directory/#Counseling_Services",
    "Albert Einstein HS":"https://www2.montgomeryschoolsmd.org/schools/einsteinhs/staff/directory/#Counseling_Services",
    "Montgomery Blair HS":"https://ww2.montgomeryschoolsmd.org/directory/directory_Boxschool.aspx?processlevel=04757",
    "Damascus HS":"https://ww2.montgomeryschoolsmd.org/directory/directory_Boxschool.aspx?processlevel=04701",
    "Gaithersburg HS":"https://www2.montgomeryschoolsmd.org/schools/gaithersburghs/resources/staff/directory/#Counseling_Department",
    "James Hubert Blake HS":"https://www2.montgomeryschoolsmd.org/schools/blakehs/staff/directory/#Counseling",
    "Thomas Edison HS":"https://www2.montgomeryschoolsmd.org/schools/edison/about/directory/#Counseling",
    "Walter Johnson HS":"https://www2.montgomeryschoolsmd.org/schools/wjhs/staff/staff-directory/?processlevel=04424#Counseling_Services",
    "Winston Churchill HS":"https://www2.montgomeryschoolsmd.org/schools/churchillhs/staff/directory/#Counseling_Department",
    "John F. Kennedy HS":"https://www2.montgomeryschoolsmd.org/schools/kennedyhs/staff/directory/#Counseling",
    "Northwest HS":"https://www2.montgomeryschoolsmd.org/schools/northwesths/staff/directory/#Counseling_Services",
    "Poolesville HS":"https://www2.montgomeryschoolsmd.org/schools/poolesvillehs/staff/directory/#Counseling_Services",
    "Col. Zadok Magruder HS":"https://www2.montgomeryschoolsmd.org/schools/magruderhs/staff/directory/#Counseling_Services",
    "Northwood HS":"https://www2.montgomeryschoolsmd.org/schools/northwoodhs/about/staff/",
    "Quince Orchard HS":"https://www2.montgomeryschoolsmd.org/schools/qohs/staff/directory/#Counseling",
    "Richard Montgomery HS":"https://www2.montgomeryschoolsmd.org/schools/rmhs/staff/directory/#Counseling_Department",
    "Paint Branch HS":"https://www2.montgomeryschoolsmd.org/schools/paintbranchhs/staff/directory/#Counseling_Department",
    "Rockville HS":"https://www2.montgomeryschoolsmd.org/schools/rockvillehs/staff/directory/#Counseling",
    "Springbrook HS":"https://www2.montgomeryschoolsmd.org/schools/springbrookhs/staff/directory/#Counseling",
    "Walt Whitman HS":"https://docs.google.com/document/u/1/d/e/2PACX-1vTD_Um51-AX1ZUDaF2Ht-jES8vDD9KLn4qNG8z3f4iqrEmwSQmUlbE_WFbJVglR3JkacrZF6F5Djzcl/pub#h.6basohj5mpn9",
    "Seneca Valley HS":"https://www2.montgomeryschoolsmd.org/schools/senecavalleyhs/staff/directory/#Counseling_Services",
    "Watkins Mill HS":"https://www2.montgomeryschoolsmd.org/schools/watkinsmillhs/staff/directory/#Counseling",
    "Thomas S. Wootton HS":"https://www2.montgomeryschoolsmd.org/schools/woottonhs/staff/directory/#Counseling_Services",
    "Sherwood HS":"https://www2.montgomeryschoolsmd.org/schools/sherwoodhs/staff/directory/#Counseling",
    "Wheaton HS":"https://www2.montgomeryschoolsmd.org/schools/wheatonhs/admin/directory/#Counseling"
}

for (let school in schools){
    document.getElementById("schoolselect").innerHTML += `<option value="${school}">${school}</option>`
}
window.onload = function(e){
    let val = document.getElementById('schoolselect').value

    document.getElementById('schoollink').href = schools[val]
    document.getElementById('schoollink').innerHTML = "Click here to find your Counselor for " + schoolselect.value + "!" 
    console.log(schools[val])

}
document.getElementById('schoolselect').oninput = function(e){
    let val = document.getElementById('schoolselect').value

    document.getElementById('schoollink').href = schools[val]

    document.getElementById('schoollink').innerHTML = "Click here to find your Counselor for " + schoolselect.value + "!" 
    console.log(schools[val])

}