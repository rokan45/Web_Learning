const detailSection=document.getElementsByTagName('section');
console.log(detailSection);

//style that applied to all section
for(const section of detailSection){
    section.style.backgroundColor="lightgreen"
    section.style.borderRadius= '10px'
    section.style.border='5px solid red'
}

//dynamic class
for(const section of detailSection){
 section.classList.add('section-card');
}