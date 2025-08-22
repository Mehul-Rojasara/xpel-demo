// Common regex patterns for content parsing and validation

// Pattern to match numbered list items (e.g., "1.", "2.", "10.")
export const NUMBERED_LIST_PATTERN = /^\d+\./;

// Pattern to match bold text wrapped in ** (e.g., "**Title**")
export const BOLD_TEXT_PATTERN = /^\*\*(.*?)\*\*(.*)/;

// Pattern to match definition items with bold term and dash separator (e.g., "**Term** - Definition")
export const DEFINITION_PATTERN = /^\*\*(.*?)\*\*\s*-\s*(.*)/;

 