<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep the source site's section components and semantic design tokens; this project is a faithful market-specific copy.
- Centralize market and contact data in the site configuration and expose a fixed Mexico-only hook; obsolete country preferences must not change the market.
- Keep asset pointers scoped to this project and migrate source media through the asset uploader; source-project pointers cannot resolve here.
- Keep canonical and Open Graph page URLs self-referencing and relative until a project domain is assigned.
