export const domain = {
  "kind": "feedback-loop",
  "title": "Mentor Feedback Loop",
  "purpose": "A purpose-built feedback loop interface for structured feedback cycles between cpg-style mentors and student pods.",
  "inputTitle": "Product-specific inputs",
  "previewTitle": "Generated working outputs",
  "tableTitle": "Feedback comments",
  "metricLabels": [
    "Resolution Rate",
    "Actionability",
    "Mentor Load"
  ],
  "fields": [
    {
      "id": "organization-client",
      "label": "Organization / client",
      "type": "text",
      "sample": "Volta Cyprus Chapter",
      "placeholder": "Enter organization / client"
    },
    {
      "id": "primary-goal",
      "label": "Primary goal",
      "type": "text",
      "sample": "mentor comments resolved before delivery",
      "placeholder": "Enter primary goal"
    },
    {
      "id": "owner-reviewer",
      "label": "Owner / reviewer",
      "type": "text",
      "sample": "Volta project lead",
      "placeholder": "Enter owner / reviewer"
    },
    {
      "id": "evidence-source",
      "label": "Evidence source",
      "type": "text",
      "sample": "Owner interview + public audit",
      "placeholder": "Enter evidence source"
    },
    {
      "id": "input-asset",
      "label": "Input asset",
      "type": "text",
      "sample": "Feedback request created",
      "placeholder": "Enter input asset"
    },
    {
      "id": "output-format",
      "label": "Output format",
      "type": "text",
      "sample": "Review packet",
      "placeholder": "Enter output format"
    },
    {
      "id": "review-threshold",
      "label": "Review threshold",
      "type": "number",
      "sample": 85,
      "placeholder": "Enter review threshold"
    },
    {
      "id": "approved-channel",
      "label": "Approved channel",
      "type": "text",
      "sample": "Owner handoff packet",
      "placeholder": "Enter approved channel"
    }
  ],
  "rows": [
    "Feedback request created",
    "Artifact linked",
    "Mentor assigned",
    "Comments categorized",
    "Severity assigned",
    "Owner assigned",
    "Resolution evidence added",
    "Growth reflection exported"
  ],
  "artifacts": [
    "Review packet",
    "Action item report",
    "Growth reflection"
  ],
  "checks": [
    "Every comment needs severity/owner",
    "Blockers require resolution",
    "Stale feedback flagged"
  ],
  "sampleClient": "Volta Cyprus Chapter"
};
