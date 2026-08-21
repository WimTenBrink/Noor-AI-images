export interface ActionItem {
  id: string;
  name: string;
  label: string;
  description: string;
  prompt: string;
  actionText: string;
  category: string;
}

export interface ActionGroup {
  id: string;
  name: string;
  icon: string;
  description: string;
  actions: ActionItem[];
}

/**
 * Helper to construct an ActionItem ensuring all backward-compatible aliases are populated.
 */
export function createActionItem(
  id: string,
  name: string,
  description: string,
  prompt: string,
  category: string
): ActionItem {
  return {
    id,
    name,
    label: name,
    description,
    prompt,
    actionText: prompt,
    category
  };
}
