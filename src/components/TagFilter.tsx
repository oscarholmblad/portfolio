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
    <div className="mb-6 flex flex-wrap items-center gap-2">
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);

        return (
          <button
            key={tag}
            type="button"
            onClick={() => onToggleTag(tag)}
            aria-pressed={isSelected}
            className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-colors ${
              isSelected
                ? "border-birch bg-birch text-forest"
                : "border-birch/25 text-lichen hover:border-birch/60 hover:text-birch"
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
        className="cursor-pointer px-3 py-1.5 text-sm text-lichen underline underline-offset-4 transition-colors hover:text-birch disabled:cursor-not-allowed disabled:no-underline disabled:opacity-40"
      >
        Rensa filter
      </button>
    </div>
  );
};

export default TagFilter;
