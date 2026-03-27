from typing import Any, Dict, List, Optional, Union, Literal
from dataclasses import dataclass, asdict, field

@dataclass
class ColumnConfig:
    """Base class for column configuration."""

    label: Optional[str] = None
    width: Optional[Union[int, Literal["small", "medium", "large"]]] = None
    help: Optional[str] = None
    hidden: bool = False
    required: bool = False
    disabled: bool = False

    # Base GridCell properties
    theme_override: Optional[Dict[str, Any]] = None
    style: Optional[Literal["normal", "faded"]] = None
    content_align: Optional[Literal["left", "center", "right"]] = None
    cursor: Optional[str] = None

    def to_dict(self) -> Dict[str, Any]:
        return {k: v for k, v in asdict(self).items() if v is not None}


@dataclass
class NumberColumn(ColumnConfig):
    """Configuration for number columns."""

    format: Optional[str] = None
    min_value: Optional[Union[int, float]] = None
    max_value: Optional[Union[int, float]] = None
    step: Optional[Union[int, float]] = None


@dataclass
class TextColumn(ColumnConfig):
    """Configuration for text columns."""

    max_chars: Optional[int] = None
    validate: Optional[str] = None


@dataclass
class CheckboxColumn(ColumnConfig):
    """Configuration for checkbox columns."""

    pass


@dataclass
class SelectboxColumn(ColumnConfig):
    """Configuration for selectbox columns."""

    options: List[Any] = field(default_factory=list)


@dataclass
class MultiselectColumn(ColumnConfig):
    """Configuration for multiselect columns."""

    options: List[Any] = field(default_factory=list)


@dataclass
class DateColumn(ColumnConfig):
    """Configuration for date columns."""

    format: Optional[str] = None
    min_value: Optional[str] = None
    max_value: Optional[str] = None


@dataclass
class DatetimeColumn(ColumnConfig):
    """Configuration for datetime columns."""

    format: Optional[str] = None
    min_value: Optional[str] = None
    max_value: Optional[str] = None
    timezone: Optional[str] = None


@dataclass
class LinkColumn(ColumnConfig):
    """Configuration for link columns."""

    display_text: Optional[str] = None
    max_chars: Optional[int] = None


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
