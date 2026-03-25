from typing import Any, Dict, List, Optional, Union
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
class JsonColumn(ColumnConfig):
    """Configuration for JSON columns."""
    pass

@dataclass
class SparklineColumn(ColumnConfig):
    """Configuration for sparkline columns."""
    pass
