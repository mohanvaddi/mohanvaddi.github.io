---
title: Example
image: https://opengraph.githubassets.com/1/mohanvaddi/mohanvaddi.github.io
description: First post.
date: '2023-4-14'
categories:
  - sveltekit
  - svelte
published: true
---

<script>
  import Counter from '$src/lib/components/Counter.svelte'
</script>

## Example post

The counter is rendered inside Markdown.
<Counter count={1}/>

```typescript
type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];
export function formatDate(date: string, dateStyle: DateStyle = 'long', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

export const customFormatDistance = (date: Date) => {
	return formatDistance(date, new Date(), {
		addSuffix: true
	});
};
```
