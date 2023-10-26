
function projcard(project){
    return `
    <div class="h-72 m-5 rounded-md shadow-sm p-5 shadow-slate-950 flex flex-row">
        <div class="flex w-3/4 justify-start items-start flex-col">
            <p class="text-2xl text-green-600 font-bold font-[nosifer]">${project["title"]}</p>
            <p class=" my-4 text-lg">${project["description"]}</p>
            <div class="w-full items-center flex flex-row">
            ${project["skills"].map((v,idx)=>`<div class="bg-slate-300 p-2 mr-3 text-sm rounded-3xl hover:bg-slate-950 hover:text-white">${v}</div>`)}
            </div>
            <div class="my-4 flex flex-col">
                <a href="${project["github"]}" class="text-green-600 hover:underline my-auto">GitHub Repo</a>
                <a href="${project["github"]}" class="text-green-600 hover:underline my-auto">Website</a>
            </div>
        </div>
        <div class="flex w-1/4 ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVm-ndjr9s251Ng0RE_LOsY7lgmd1coVp_1OlCC6M&s" width=100% height=100% alt="">
        </div>
    </div>
`
}



function AddProjects(){
    let el = document.getElementById("main")
    for(var x=0;x<allprojects.projects.length;x++){
        if (el.insertAdjacentHTML)
            el.insertAdjacentHTML ("beforebegin", projcard(allprojects.projects[x]));
        else {
            var range = document.createRange();
            var frag = range.createContextualFragment(projcard(allprojects.projects[x]));
            el.parentNode.insertBefore(frag, el);
        }
    }
    console.log(allprojects)
}
AddProjects()