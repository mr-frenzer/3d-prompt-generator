const topicInput = document.getElementById('topic');
const detailsInput = document.getElementById('details');
const generateButton = document.getElementById('generate');
const clearButton = document.getElementById('clear');
const promptOutput = document.getElementById('prompt');
const copyButton = document.getElementById('copy-prompt');
const styleInput = document.getElementById('style');

generateButton.addEventListener('click', () => {
  const topic = topicInput.value.trim();
  const details = detailsInput.value.trim();
  const style = styleInput.value;

  if (!topic) {
    promptOutput.textContent = "Please enter a topic.";
    promptOutput.classList.remove('text-sm', 'italic');
    promptOutput.classList.add('text-red-500', 'font-semibold');
    return;
  }

  let prompt = `Black and white image of ${topic}. `;
  if (details) {
    prompt += `${details}. `;
  }
  prompt += `${style} one-line art, black foreground, white background, no grey, high contrast, connected lines, no free-floating elements, geometric, vector art, centered composition.`;
  
  promptOutput.textContent = prompt;
  promptOutput.classList.remove('text-red-500', 'font-semibold');
  promptOutput.classList.add('text-gray-custom', 'text-sm', 'italic');
});

clearButton.addEventListener('click', () => {
  topicInput.value = '';
  detailsInput.value = '';
  promptOutput.textContent = 'Generated Prompt will appear here...';
  promptOutput.classList.remove('text-red-500', 'font-semibold');
  promptOutput.classList.add('text-gray-custom', 'text-sm', 'italic');
});

copyButton.addEventListener('click', () => {
  const promptText = promptOutput.textContent;
  navigator.clipboard.writeText(promptText).then(() => {
    alert("Prompt copied to clipboard!");
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
});
