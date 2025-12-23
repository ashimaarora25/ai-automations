const text = $input.first().json.output[0].content[0].text

const subjectMatch = text.match(/subject\s*:\s*(.+)/i);
const bodyMatch = text.match(/body\s*:\s*([\s\S]+)/i);


return [
  {
    subject: subjectMatch ? subjectMatch[1].trim() : "Daily Weather Update",
    body: bodyMatch ? bodyMatch[1].trim() : text
  }
];  

