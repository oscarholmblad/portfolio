import type { Tag } from "../types";

type TagFilterProps = {
  tags: Tag[];
  selectedTags: Tag[];
  onToggleTag: (tag: Tag) => void;
  onClear: () => void;
};

const TagFilter = ({
  tags,
  selectedTags,
  onToggleTag,
  onClear,
}: TagFilterProps) => {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2">
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);

        return (
          <button
            key={tag}
            type="button"
            onClick={() => onToggleTag(tag)}
            aria-pressed={isSelected}
            className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors ${
              isSelected
                ? "border-accent bg-accent text-zinc-950"
                : "border-zinc-700 text-zinc-300 hover:border-accent hover:text-accent"
            }`}
          >
            {tag}
          </button>
        );
      })}

      <button
        type="button"
        onClick={onClear}
        disabled={selectedTags.length === 0}
        className="cursor-pointer px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Rensa filter
      </button>
    </div>
  );
};

export default TagFilter;
