export function handleSubmit(event) {
  event.preventDefault();
  const updateUI = async () => {
    const request = await fetch('/all');
    try {
      const allData = await request.json();
      document.getElementById('agreement').innerHTML =
        'The agreement score for this article is ' + allData.agreement;

      document.getElementById('confidence').innerHTML =
        'The confidence score for this article is ' + allData.confidence;

      document.getElementById('irony').innerHTML =
        'The irony score for this article is ' + allData.irony;
      // console.log(allData);
    } catch (erorr) {
      console.log('error');
    }
  };
  // check what text was put into the form field
  let formText = document.getElementById('name').value;

  let test = { link: formText };
  console.log('::: Form Submitted :::');
  const options = {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(test),
  };
  fetch('/datax', options).then(updateUI());
}
