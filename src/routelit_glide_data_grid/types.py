from dataclasses import asdict, dataclass, field
from typing import Any, Literal, TypedDict


class SelectionCurrent(TypedDict, total=False):
    """Represents the currently selected cell/range."""

    cell: tuple[int, int]
    range: dict[str, int]  # x, y, width, height


class GridSelection(TypedDict, total=False):
    """Represents the selection state of the grid."""

    rows: list[int]
    columns: list[int]
    current: SelectionCurrent | None


@dataclass
class ColumnConfig:
    """Base class for column configuration."""

    label: str | None = None
    width: int | Literal["small", "medium", "large"] | None = None
    help: str | None = None
    hidden: bool = False
    required: bool = False
    disabled: bool = False
    group: str | None = None

    # Base GridCell properties
    theme_override: dict[str, Any] | None = None
    style: Literal["normal", "faded"] | None = None
    content_align: Literal["left", "center", "right"] | None = None
    cursor: str | None = None

    def to_dict(self) -> dict[str, Any]:
        return {k: v for k, v in asdict(self).items() if v is not None}


@dataclass
class NumberColumn(ColumnConfig):
    """Configuration for number columns."""

    format: str | None = None
    min_value: int | float | None = None
    max_value: int | float | None = None
    step: int | float | None = None


@dataclass
class TextColumn(ColumnConfig):
    """Configuration for text columns."""

    max_chars: int | None = None
    validate: str | None = None


@dataclass
class CheckboxColumn(ColumnConfig):
    """Configuration for checkbox columns."""

    pass


@dataclass
class SelectboxColumn(ColumnConfig):
    """Configuration for selectbox columns."""

    options: list[Any] = field(default_factory=list)


@dataclass
class MultiselectColumn(ColumnConfig):
    """Configuration for multiselect columns."""

    options: list[Any] = field(default_factory=list)


@dataclass
class DateColumn(ColumnConfig):
    """Configuration for date columns."""

    format: str | None = None
    min_value: str | None = None
    max_value: str | None = None


@dataclass
class DatetimeColumn(ColumnConfig):
    """Configuration for datetime columns."""

    format: str | None = None
    min_value: str | None = None
    max_value: str | None = None
    timezone: str | None = None


@dataclass
class LinkColumn(ColumnConfig):
    """Configuration for link columns."""

    display_text: str | None = None
    max_chars: int | None = None


@dataclass
class ImageColumn(ColumnConfig):
    """Configuration for image columns."""

    pass


@dataclass
class ProtectedColumn(ColumnConfig):
    """Configuration for protected (password/secret) columns."""

    pass


@dataclass
class IDColumn(ColumnConfig):
    """Configuration for ID columns."""

    pass


@dataclass
class MarkdownColumn(ColumnConfig):
    """Configuration for markdown columns."""

    pass


@dataclass
class JsonColumn(ColumnConfig):
    """Configuration for JSON columns."""

    pass
