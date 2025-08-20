// Common regex patterns for content parsing and validation

// Pattern to match numbered list items (e.g., "1.", "2.", "10.")
export const NUMBERED_LIST_PATTERN = /^\d+\./;

// Pattern to match bold text wrapped in ** (e.g., "**Title**")
export const BOLD_TEXT_PATTERN = /^\*\*(.*?)\*\*(.*)/;

// Pattern to match email links in markdown format (e.g., "[email@domain.com](mailto:email@domain.com)")
export const EMAIL_LINK_PATTERN = /\[([^\]]+)\]\(mailto:([^)]+)\)/;

// Pattern to match definition items with bold term and dash separator (e.g., "**Term** - Definition")
export const DEFINITION_PATTERN = /^\*\*(.*?)\*\*\s*-\s*(.*)/;

// Pattern to extract email from markdown link
export const EXTRACT_EMAIL_PATTERN = /\[([^\]]+)\]\(mailto:([^)]+)\)/;

// Pattern to check if content contains email link
export const HAS_EMAIL_LINK_PATTERN = /\[([^\]]+)\]\(mailto:([^)]+)\)/; 