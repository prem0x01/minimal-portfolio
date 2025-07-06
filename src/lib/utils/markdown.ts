export interface CodeBlockMatch {
  language: string;
  code: string;
  placeholder: string;
}

export function parseMarkdown(content: string): { html: string; codeBlocks: CodeBlockMatch[] } {
  const codeBlocks: CodeBlockMatch[] = [];

  // Extract code blocks first
  let html = content.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, language, code) => {
    const placeholder = `CODE_BLOCK_${codeBlocks.length}`;
    codeBlocks.push({
      language: language || '',
      code: code.trim(),
      placeholder
    });
    return `<div data-code-placeholder="${placeholder}"></div>`;
  });

  // Basic markdown parsing
  html = html
    // Headers
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mb-4 mt-6">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mb-4 mt-8">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-6 mt-8">$1</h1>')

    // Bold and italic
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')

    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>')

    // Images - handle both relative and absolute paths
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
      // If src doesn't start with http or /, assume it's relative to images folder
      const imageSrc = src.startsWith('http') || src.startsWith('/') ? src : `/src/content/images/${src}`;
      return `<img src="${imageSrc}" alt="${alt}" class="border border-black my-4 max-w-full" />`;
    })

    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded">$1</code>')

    // Paragraphs
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/^/, '<p class="mb-4">')
    .replace(/$/, '</p>');

  return { html, codeBlocks };
}
